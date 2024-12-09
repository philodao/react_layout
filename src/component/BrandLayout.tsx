import { Link } from 'react-router-dom';
import { List } from "@phosphor-icons/react";
import '../_assets/css/reset.css'
import '../_assets/css/common.css'
import '../_assets/css/brand.css'

export interface BrandLayoutProps {
    children: React.ReactElement
}

export function BrandLayout(props: BrandLayoutProps){
    return (
        <>
            <div className='wrapper'>
                <div className='sidebar-wrapper'>
                    <div className='simplebar-wrapper'>
                        
                    </div>
                </div>

                <header>
                    <div className='topbar'>
                        <div className='navbar divFlex align-items-center'>
                            <div className='mobile-toggle-menu'>
                                <List size={32} />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="brandSite">
                {props.children}
                </div>
            </div>
        </>
    )

}

export default BrandLayout;