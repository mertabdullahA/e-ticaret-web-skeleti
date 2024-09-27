import './css/kutular.css'

function Kutular() {

    return (


        <>

            <div className='ustkutu'>
                <div className='ust-kutu1'>
                    <img className='marka' src='marka.png'></img>

                    <h1 className='kutubaslik'><strong>% 15</strong></h1>
                    <p className='p'>İndirim !</p>
                </div>
                <div className='ust-kutu2'>
                    <img className='marka' src='marka.png'></img>
                    <h1 className='kutubaslik'><strong>% 15</strong></h1>
                    <p className='p'>İndirim !</p>

                </div>
            </div>
            <div className='altkutu'>
                <div className='alt-kutu1'>
                    <img className='marka' src='marka.png'></img>

                    <h1 className='kutubaslik'><strong>% 15</strong></h1>
                    <p className='p'>İndirim !</p>

                </div>
                <div className='alt-kutu2'>
                    <img className='marka' src='marka.png'></img>

                    <h1 className='kutubaslik'><strong>% 15</strong></h1>
                    <p className='p'>İndirim !</p>
                    <div className='img-content'>
                        <img src='erkek.png'></img>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Kutular