import styled from '@emotion/styled'
import {  ChevronDownIcon } from '@chakra-ui/icons'

// Menu : #335075
// Hover : #243850

function TopMenu() {


const Div = styled.div`
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: wrap;
    background-color: #335075;
    font-family: "Times New Roman", Times, serif;
    display:flex;
    justify-content: center;   
    
  }
  
  li {
    float: left;
    border-left: 1px solid #bbb
  }
  li:last-child {
    border-right: 1px solid #bbb;
  }
  
  li a, .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 40px;
    text-decoration: none;
    font-family: "Times New Roman", Times, serif;
  }
  
  li a:hover, .dropdown:hover .dropbtn {
    background-color: #243850;
    font-family: "Times New Roman", Times, serif;
  }
  
  li.dropdown {
    display: inline-block;
    color: c6f3ff;
    font-family: "Times New Roman", Times, serif;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #cccccc;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
    font-family: "Times New Roman", Times, serif;
  }
  
  .dropdown-content a {
    color: #444444;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
  }
  
  .dropdown-content a:hover {
    background-color: #243850;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    
}
  
  .dropdown:hover .dropdown-content {
    display: block;
    font-family: "Times New Roman", Times, serif;
    
  }
`

return (
  
    <div>
        <Div>
            <ul>                
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"><strong>Jobs </strong> <ChevronDownIcon /> </a>
                    <div className="dropdown-content">
                    <a href="https://google.com"  rel="noreferrer">Google.com
                      </a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>

                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>Immigration </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>

                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>Travel </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>

                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>Business  </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>

                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>Benefits  </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>
                    
                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>Health  </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>
                    
                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>Taxes  </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>
                    
                    <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"> <strong>More Services  </strong> <ChevronDownIcon /></a>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                    </li>
            </ul>

        </Div>            
    </div>

    );
}

export default TopMenu;