'use client';
import './style.scss';
import gym from '../../../public/images/carousel/gym.jpg';
import cableCross from '../../../public/images/carousel/cableCross.jpg';
import deadlift from '../../../public/images/carousel/deadlift.jpg';
import deadlift2 from '../../../public/images/carousel/deadlift2.jpg';
import rock from '../../../public/images/carousel/rock.jpg';
import dumbell from '../../../public/images/carousel/dumbell.jpg';
export default function Carousel() {
    const carouselItems = [
        { id: 1, image: gym, label: 'First slide label' },
        { id: 2, image: cableCross, label: 'Second slide label', description: 'Some representative placeholder content for the second slide.' },
        { id: 3, image: deadlift },
        { id: 4, image: deadlift2, label: 'Fourth slide label', description: 'Some representative placeholder content for the fourth slide.' },
        { id: 5, image: rock, label: 'Fifth slide label', description: 'Some representative placeholder content for the fifth slide.' },
        { id: 6, image: dumbell, label: 'Sixth slide label', description: 'Some representative placeholder content for the sixth slide.' },
    ]
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-component" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    carouselItems.map((item, index) => (
                        <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
                            <img src={item.image.src} className="d-block w-100" alt="..." />
                            {(item.label || item.description) && (<div className="carousel-caption d-none d-md-block">
                                <h5>{item.label}</h5>
                                <p>{item.description}</p>
                            </div>)}
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}