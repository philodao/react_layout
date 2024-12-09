import { Link } from 'react-router-dom';
import '../_assets/css/reset.css'
import '../_assets/css/common.css'
import '../_assets/css/brand.css'

function BrandLayout(props){
    return (
        <>
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <div className="simplebar-wrapper">
                        
                    </div>
                </div>

                <div className="brandSite">
                {props.children}
                </div>
            </div>
        </>
    )

}

export default BrandLayout;