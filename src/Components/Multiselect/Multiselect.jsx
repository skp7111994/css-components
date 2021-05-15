import { useEffect, useState } from "react";
import ChevronIcon from "../../Chevron"
import './Multiselect.css';

const Multiselect = (props) => {
    const { options } = props;
    const [isOpen, setOpen] = useState(false);
    const onCheckboxChange = (checked, index) => { }
    return (
        <div id="multiselect">
            <div className="accordion">
                <div className="title" onClick={() => setOpen((prev) => !prev)}>
                    <input type="text" placeholder={"Select"} />
                    <div className={isOpen ? 'rotate chevron' : 'chevron'}><ChevronIcon /></div>
                </div>
                {isOpen && <div className="content">
                    {
                        options.map((option, index) => <div key={`multiselect_option_${index}`} className="option">
                            <label>
                                <input type="checkbox" checked={option.checked} onChange={(event) => onCheckboxChange(event.target.checked, index)} />
                                {/* <span className='checkmark'></span> */}
                                {option.label}
                            </label>
                        </div>
                        )
                    }
                </div>}
            </div>
        </div>
    )
}

export default Multiselect;