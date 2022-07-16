import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='Foot'>
        <div className="Footer">
            <div className="title">
                <p>Подпишитесь на нас!</p>
            </div>
            <div className="contacts">
                <a href="https://youtu.be/besuhAY4h70"><img src="/img/instagram.svg" alt="" /></a>
                <a href="https://youtu.be/kFv3476YVbU"><img src="/img/facebook.svg" alt="" /></a>
                <a href="https://youtu.be/JbXtfdkkRxg"><img src="/img/telegram.svg" alt="" /></a>
                <a href="https://youtu.be/LiqIQ5He7_4"><img src="/img/youtube.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer