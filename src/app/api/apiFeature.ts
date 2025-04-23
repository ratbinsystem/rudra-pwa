import { Query } from 'mongoose';

export default class ApiFeatures<T> {
  query: Query<T[], T>;
  queryString: Record<string, string | undefined>;

  constructor(query: Query<T[], T>, queryString: Record<string, string | undefined>) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  select() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(`${fields}`);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page ? parseInt(this.queryString.page, 10) : 1;
    const limit = this.queryString.limit ? parseInt(this.queryString.limit, 10) : 20;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }

  search() {
    if (this.queryString.search) {
      this.query = this.query.find({ $text: { $search: this.queryString.search } });
    }

    return this;
  }

  applyAll() {
    this.filter();
    this.sort();
    this.select();
    this.paginate();
    this.search();
    return this;
  }

  async exec() {
    try {
      const results = await this.query.exec();
      return results;
    } catch (error) {
      console.error('Error executing query:', error);
      throw new Error('Query execution failed');
    }
  }
}
