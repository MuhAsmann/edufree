import React from 'react'
// import Header from '../components/Header'
import "./Home.css"
import home from '../images/home1.png';
import point from '../images/point.png';
import gambar1 from "../images/gambar1.png"
import kursus1 from "../images/kursus1.png"

const Home = () => {
  return (
    <div>
        <div className='jumbotron' id='jumbotron'>
            <div className="content">
                <h1>Bangun Dan Wujudkan Cita <br/> bersama EDUFREE</h1>
                <p>EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online
 yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.</p>
                <div className="button">
                    <a className="button-second" href="#">Lihat Kursus</a>
                    <a href="#">Lihat Alur Belajar → </a>
                </div>
            </div>
            <div className="gambar">
                <img src={home} alt="gambar" />   
            </div>
        </div>
        <div className="sponsor">
            <div className="info">
                <p><span>21.000+</span><br />Siswa Terdaftar</p>
                <p><span>100+</span><br />Siswa Terdaftar</p>
                <p><span>150+</span><br />Siswa Terdaftar</p>
            </div>
            <div className="brand">
                <p><span>♣</span>LOREM</p>
                <p><span>♣</span>DITLANCE</p>
                <p><span>♣</span>OWTHEST</p>
                <p><span>♣</span>NEOVASI</p>
                <p><span>♣</span>ONAGO</p>
            </div>
        </div>
        <div className="keuntungan">
            <h1>Keuntungan Bergabung Dengan <br />E-Learning EDUFREE</h1>
            <div className="items-keuntungan">
                <div className="item-keuntungan">
                    <div className="icon" ><img src={point} alt="" /><span>1</span></div>
                    <h2>Kursus Gratis</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facere qui ad eos! Consequuntur aliquam, officiis ab repellendus aliquid obcaecati illum cupiditate vero rerum, totam similique! Minus ratione atque beatae?</p>
                </div>
                <div className="item-keuntungan">
                    <div className="icon" ><img src={point} alt="" /><span>2</span></div>
                    <h2>Akses Selamanya</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facere qui ad eos! Consequuntur aliquam, officiis ab repellendus aliquid obcaecati illum cupiditate vero rerum, totam similique! Minus ratione atque beatae?</p>
                </div>
                <div className="item-keuntungan">
                    <div className="icon" ><img src={point} alt="" /><span>3</span></div>
                    <h2>Grup Konsultasi</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facere qui ad eos! Consequuntur aliquam, officiis ab repellendus aliquid obcaecati illum cupiditate vero rerum, totam similique! Minus ratione atque beatae?</p>
                </div>
                <div className="item-keuntungan">
                    <div className="icon" ><img src={point} alt="" /><span>4</span></div>
                    <h2>Sertifikasi Dan Portfolio</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facere qui ad eos! Consequuntur aliquam, officiis ab repellendus aliquid obcaecati illum cupiditate vero rerum, totam similique! Minus ratione atque beatae?</p>
                </div>
                <div className="item-keuntungan">
                    <div className="icon" ><img src={point} alt="" /><span>5</span></div>
                    <h2>Belajar Lebih Terarah</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facere qui ad eos! Consequuntur aliquam, officiis ab repellendus aliquid obcaecati illum cupiditate vero rerum, totam similique! Minus ratione atque beatae?</p>
                </div>
                <div className="item-keuntungan">
                    <div className="icon" ><img src={point} alt="" /><span>6</span></div>
                    <h2>Instruktur Berpengalaman</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam facere qui ad eos! Consequuntur aliquam, officiis ab repellendus aliquid obcaecati illum cupiditate vero rerum, totam similique! Minus ratione atque beatae?</p>
                </div>
            </div>
        </div>
        <div className="tentang-kami" id='tentang'>
            <div className="info-tentang">
                <h3>Tentang Kami</h3>
                <h2>EDUFREE Layanan E-Learning <br />Gratis Untuk Membantu Kamu <br />Bertumbuh</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores aspernatur dicta?</p>
            </div>
            <img src={gambar1} alt="" />
        </div>
        <div className="rekomendasi-kursus">
            <div className="nav-kursus">
                <h1>Rekomendasi Kursus <br />Untuk Kamu</h1>
                <div className="fitur">
                    <select name="kategori" id="">
                        <option value="web">Web</option>
                        <option value="security">Security</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                    </select>
                    <a href="" className="button-second">Lihat Semua</a>
                </div>
            </div>
                <hr />
            <div className="kursus-item">
                <div className="item">
                    <img src={kursus1} alt="" />
                    <span className='rating'>
                        <span>⭐️</span>
                        <p>4.9</p>
                    </span>
                    <h4>Digital Marketing 101</h4>
                    <p className='desk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum magni aut.</p>
                    <div className="point">
                        <div className="jam"><span>❂</span>4.5 Jam</div>
                        <div className="vidio"><span>❂</span>20 Vidio</div>
                        <div className="pelajar"><span>❂</span>1.900 Siswa</div>
                    </div>
                </div>
                <div className="item">
                    <img src={kursus1} alt="" />
                    <span className='rating'>
                        <span>⭐️</span>
                        <p>4.9</p>
                    </span>
                    <h4>Dasar Pemrograman WEB</h4>
                    <p className='desk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum magni aut.</p>
                    <div className="point">
                        <div className="jam"><span>❂</span>4.5 Jam</div>
                        <div className="vidio"><span>❂</span>20 Vidio</div>
                        <div className="pelajar"><span>❂</span>1.900 Siswa</div>
                    </div>
                </div>
                <div className="item">
                    <img src={kursus1} alt="" />
                    <span className='rating'>
                        <span>⭐️</span>
                        <p>4.9</p>
                    </span>
                    <h4>Dasar Pemrograman WEB</h4>
                    <p className='desk'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum magni aut.</p>
                    <div className="point">
                        <div className="jam"><span>❂</span>4.5 Jam</div>
                        <div className="vidio"><span>❂</span>20 Vidio</div>
                        <div className="pelajar"><span>❂</span>1.900 Siswa</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home