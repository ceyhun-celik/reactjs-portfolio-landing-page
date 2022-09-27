import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mb-20'>
                    <p className='text-4xl font-bold border-b-4 inline border-gray-500'>About</p>
                </div>

                <p className='text-xl mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla repellendus nostrum totam eius dolore cum ad nobis perferendis doloremque velit quia aperiam aspernatur, eos nesciunt alias. Voluptatibus, tempora quod!
                </p>


                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus molestiae provident, laudantium mollitia animi, quaerat ut fugit et porro incidunt, consequuntur atque libero maxime totam ratione rem iure accusamus?
                </p>
            </div>
        </div>
    )
}

export default About