import "../../global_css.css"
import TestimonialCard from './testimonio';
function Reseñas() {
    const testimonials = [
        {
            name: 'Mark Zuckerberg',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
            rating: 5,
            content: '"Tomás no solo me enseñó a manejar, sino que también me inculcó la importancia de ser un conductor responsable y seguro. Recomiendo encarecidamente esta academia a cualquier persona que esté buscando no solo obtener una licencia de conducir, sino también adquirir habilidades de conducción duraderas"'
        },
        {
            name: 'Elon Musk',
            image: 'https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png',
            rating: 4,
            content: '"Tomás no solo me enseñó a manejar, sino que también me inculcó la importancia de ser un conductor responsable y seguro. Recomiendo encarecidamente esta academia a cualquier persona que esté buscando no solo obtener una licencia de conducir, sino también adquirir habilidades de conducción duraderas"'
        },
        {
            name: 'Lionel Messi',
            image: 'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/03/12/16575/2021031202544061e0e3f25c3041f849de6b510817fb34.jpg',
            rating: 3,
            content: '"Tomás no solo me enseñó a manejar, sino que también me inculcó la importancia de ser un conductor responsable y seguro. Recomiendo encarecidamente esta academia a cualquier persona que esté buscando no solo obtener una licencia de conducir, sino también adquirir habilidades de conducción duraderas"'
        },
        {
            name: 'Bad Bunny',
            image: 'https://static01.nyt.com/images/2022/05/05/arts/05bad-bunny-ESP-promo/05bad-bunny1-mediumSquareAt3X.jpg',
            rating: 2,
            content: '"Tomás no solo me enseñó a manejar, sino que también me inculcó la importancia de ser un conductor responsable y seguro. Recomiendo encarecidamente esta academia a cualquier persona que esté buscando no solo obtener una licencia de conducir, sino también adquirir habilidades de conducción duraderas"'
          },
        // Agrega más testimonios según sea necesario
    ];


    return (
        <>
            <section className='container__resenas' id='container__resenas'>
                <div className="main__resenas">
                    <div className='tituloprincipal__resenas'>
                        <h2>Reseñas</h2>
                    </div>
                    <div>
                        <div className="testimonial-container">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial}/>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Reseñas
