import React from 'react'

const Page = () => {
  return (
    <div className='bg-gray-950'>
        <main>
        <a className='bg-green-600 text-white px-4 rounded m-10' href='/'>Back</a>
                {/* <!-- Container for demo purpose --> */}
        <div className="container mb-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32">
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
            className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />

            <div className="mb-6 flex items-center">
            <img src="/profile.jpg" className="mr-2 h-8 rounded-full" alt="avatar"
                loading="lazy" />
            <div  className='text-white'>
                <span> Published <u>06.09.2023</u> by </span>
                <a href="#!" className="font-medium">John Oliver Virola</a>
            </div>
            </div>

            <h1 className="mb-6 text-3xl font-bold text-green-600">
              Municipal Agriculture Office Portal - Mamburao 
            </h1>

            <p className='text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              harum tempore cupiditate asperiores provident, itaque, quo ex iusto
              rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
              sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
              soluta labore! Expedita quas, nesciunt similique autem, sunt,
              doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
              Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
              ducimus consequatur corporis, architecto nesciunt vitae ipsum
              consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
              similique eum vero in est velit quasi pariatur blanditiis incidunt
              quam.
            </p>
        </section>
        {/* <!-- Section: Design Block --> */}
        </div>
        {/* <!-- Container for demo purpose --> */}
        </main>
    </div>
  )
}

export default Page