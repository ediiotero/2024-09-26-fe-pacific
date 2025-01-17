import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

import moviePoster from '../images/movies.jpg' 

const data = [
    {
        id: 1,
        title: 'The Batman',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 2,
        title: 'Top Gun',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 3,
        title: 'Lightyear',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
        id: 4,
        title: 'Jurassic Park',
        post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
]

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className='container-fluid'>
            <img src={moviePoster} alt="movie posters" style={{minWidth: '100%', height: '15rem'}} />
            <p className='post-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, aliquid totam minus iusto rerum praesentium ipsam nihil ab harum, cumque voluptas quae consectetur aliquam, dignissimos facilis quo deleniti mollitia laboriosam cum asperiores doloremque! Quibusdam, doloribus non reiciendis quidem deleniti explicabo cupiditate! Eveniet consequuntur illo similique, perferendis impedit eius odio sed. Exercitationem aspernatur cupiditate veniam, alias sed reprehenderit fuga eius non?
            </p>
            <div className='row'>
                {data.map(movie => <Card key={movie.id} className='col-6' title={movie.title} text={movie.post} />)}
            </div>
        </main>
        <Footer copy='2025' />
      </div>
    )
  }
}

export default Home