import React,{useState} from 'react'
import './Search.css'
export default function Search() {

    const [selectedButton, setSelectedButton] = useState(1);

    function activeslide(num) {
        if (num === 2) {
            setSelectedButton(2);
        }

        else if (num === 3) {
            setSelectedButton(3);
        }

        else if (num === 4) {
            setSelectedButton(4)
        }

        else if (num === 5) {
            setSelectedButton(5)
        }

        else if (num === 6) {
            setSelectedButton(6)
        }

        else {
            setSelectedButton(1);
        }
    }


    return (
        <div className='search'>

            <div className='search_tabs_container'>
                <div className='search_tabs'>
                    <div onClick={() => activeslide(1)} className={selectedButton === 1 ? 'search_tab active' : 'search_tab'}   >
                        <img src='suitcase.webp' />
                        <span>hotels</span>
                    </div>

                    <div className={selectedButton === 2 ? 'search_tab active' : 'search_tab'} onClick={() => activeslide(2)}>
                        <img src='bus.webp' />
                        <span>car rentals</span>
                    </div>

                    <div className={selectedButton === 3 ? 'search_tab active' : 'search_tab'} onClick={() => activeslide(3)}>
                        <img src='departure.webp' />
                        <span>flights</span>
                    </div>

                    <div className={selectedButton === 4 ? 'search_tab active' : 'search_tab'} onClick={() => activeslide(4)}>
                        <img src='island.webp' />
                        <span>trips</span>
                    </div>

                    <div className={selectedButton === 5 ? 'search_tab active' : 'search_tab'} onClick={() => activeslide(5)}>
                        <img src='cruise.webp' />
                        <span>cruises</span>
                    </div>

                    <div className={selectedButton === 6 ? 'search_tab active' : 'search_tab'} onClick={() => activeslide(6)}>
                        <img src='diving.webp' />
                        <span>activities</span>
                    </div>
                </div>


            </div>

            <div className='search_panel active'>
                <form className='search_panel_content'>
                    <div className='search_item'>
                        <div>destination</div>
                        <input className='destination search_input' type='text' required />
                    </div>

                    <div className='search_item'>
                        <div>check in</div>
                        <input className='destination search_input' type='date' placeholder='YYYY-MM-DD' required />
                    </div>

                    <div className='search_item'>
                        <div>check out</div>
                        <input className='destination search_input' type='date' placeholder='YYYY-MM-DD' required />
                    </div>

                    <div className='search_item'>
                        <div>adults</div>
                        <select className='dropdown_item_select search_input' name='adults'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>


                        </select>
                    </div>

                    <div className='search_item'>
                        <div>children</div>
                        <select className='dropdown_item_select search_input' name='children'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>


                        </select>
                    </div>

                    <button className='button search_button'>Search</button>
                </form>
            </div>
        </div>
    )
}

