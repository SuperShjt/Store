
import bg from '../assets/cookies.png'

function ImgTxt(){
    return(
        <div className="background-img">
            <div className="animate-text">
                <h1>Weclome to Cookie Store</h1>
                <p>Baked with Love</p>
            </div>
            <img src={bg} alt='img' className='bg-img' />
        </div>

    )




}
export default ImgTxt