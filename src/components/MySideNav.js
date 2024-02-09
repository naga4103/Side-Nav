import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const MySideNav=()=>{


    return(
        <>
        
        <SideNav onSelect={(selected) => {
        console.log(selected)
    }}    style={{backgroundColor:"slateblue"}}>


        <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>


          <NavItem eventKey="message">
            <NavIcon>
                <i className="fa-solid fa-message" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Message
            </NavText>
        </NavItem>
                <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>

    </SideNav.Nav>

        </SideNav>

        
        </>
    )
}

export default MySideNav