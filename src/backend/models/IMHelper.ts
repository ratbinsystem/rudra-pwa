import chalk from 'chalk';
export interface IModel {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface IChangeStream {
  _id: string;
  operationType: string;
  ns: {
    db: string;
    coll: string;
  },
  fullDocument: IModel;
}
export const logChangeStream = (data : IChangeStream) => {
  console.log(`${chalk.bgBlue('Change Stream')} ${chalk.bgWhite(data.ns.db +'.'+ data.ns.coll)} ${chalk.blue(data.operationType + 'ed')} ${data.fullDocument._id} `)
}