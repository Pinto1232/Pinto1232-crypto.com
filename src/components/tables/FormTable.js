import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { faSearch, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Style/table.scss';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);




const FormTable = () => {

    const [currency, setCurrency] = useState([]);
    const [search, setSearch ] = useState("");
    const [priceDirection, setPriceDirection] = useState("asc");
    const [nameDirection, setNameDirection] = useState("asc");
    const [symbolDirection, setSymbolDirection] = useState("asc");
    const [marketUpDirection,setMarketUpDirection] = useState("asc");
    const [moveDirection,setMoveDirection] = useState("asc");

    

    const getCurrencyData = async () => {
        try {
            const data = await axios.get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=Zar&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            );
            console.log(data.data);
            setCurrency(data.data.slice(0, 10))
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrencyData()
    }, []);

   
    const sortByPrice = () => {
      if (priceDirection === "asc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.current_price);
            return b.current_price - a.current_price;
          })
        );
        setPriceDirection("desc");
      }
  
      if (priceDirection === "desc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.current_price);
            return a.id - b.current_price;
          })
        );
        setPriceDirection("asc");
      }
    };


    const sortByName = () => {
      if (nameDirection === "asc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.name);
            return a.name.localeCompare(b.name);
          })
        );
        setNameDirection("desc");
      }
  
      if (nameDirection === "desc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.name);
            return b.name.localeCompare(a.name);
          })
        );
        setNameDirection("asc");
      }
    };


    const sortByMarketUp = () => {
      if (marketUpDirection === "asc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.market_cap);
            return a.market_cap - b.market_cap;
          })
        );
        setMarketUpDirection("desc");
      }
  
      if (marketUpDirection === "desc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.market_cap);
            return a.market_cap - b.market_cap;
          })
        );
        setMarketUpDirection("asc");
      }
    };



    
    const sortBySymbol = () => {
      if (symbolDirection === "asc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.symbol);
            return b.symbol - a.symbol;
          })
        );
        setSymbolDirection("desc");
      }
  
      if (symbolDirection === "desc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.symbol);
            return a.symbol - b.symbol;
          })
        );
        setSymbolDirection("asc");
      }
    };


    const sortByMoveAth = () => {
      if (symbolDirection === "asc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.ath);
            return b.ath - a.ath;
          })
        );
        setMoveDirection("desc");
      }
  
      if (moveDirection === "desc") {
        setCurrency(
          currency.slice().sort((a, b) => {
            console.log(a.ath);
            return a.ath - b.ath;
          })
        );
        
        setMoveDirection("asc");
      }
    };


    return (
            <div className="main-table">
            <h1>Latest Crypto Prices</h1>
            <div className="search-t">
                    <input 
                    className="search-top"
                    type="text" 
                    placeholder="Search here"
                    onChange={(e) => {
                        setSearch(e.target.value);
                       
                    }}
                    
                    />
                    <FontAwesomeIcon 
                    className="searchIcon"
                  icon={ faSearch } />
            </div>

      
              <TableContainer component={Paper} className="table-main">
              <Table className="" aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell onClick={() => sortByName("name")}>
                    Coin Name
                    <FontAwesomeIcon 
                     className="up-down"
                    icon={ faSortUp } />
                    <FontAwesomeIcon 
                     className="up-down"
                    icon={ faSortDown } />
                    </StyledTableCell>
                    <StyledTableCell  align="right" onClick={() => sortBySymbol("symbol")}>
                      Coin Symbol
                      <FontAwesomeIcon 
                        className="up-down"
                        icon={ faSortUp } />
                      <FontAwesomeIcon 
                        className="up-down"
                        icon={ faSortDown } />
                    </StyledTableCell>
                    <StyledTableCell align="right" onClick={() => sortByPrice("current_price") }>
                       Price
                        <FontAwesomeIcon 
                        className="up-down"
                       icon={ faSortDown } />
                    </StyledTableCell>
                    <StyledTableCell align="right" onClick={() => sortByMoveAth("ath")}>
                        1h move
                        <FontAwesomeIcon 
                        className="up-down"
                       icon={ faSortUp } />
                       <FontAwesomeIcon 
                        className="up-down"
                       icon={ faSortDown } />
                    </StyledTableCell>
                    <StyledTableCell align="right" onClick={() => sortByMarketUp("market_cap")}>
                        Market Cap
                        <FontAwesomeIcon 
                        className="up-down"
                       icon={ faSortUp } />
                       </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                {currency
                        .filter((item) =>{
                            if (search == "") {
                                return item;
                            }else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                                return item;
                            }
                        } ).map((item, id) => {
                        return (
                            <StyledTableRow key={id}>
                            <StyledTableCell component="th" scope="row">
                               {item.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                               {item.symbol}
                            </StyledTableCell>
      
                            <StyledTableCell align="right">
                                {item.current_price}
                            </StyledTableCell>
      
                            <StyledTableCell align="right">
                               {item.ath}
                            </StyledTableCell>
      
                            <StyledTableCell align="right">
                                {item.market_cap}
                            </StyledTableCell>
                            
                          </StyledTableRow>
                        )
                    })}
                 
           
     
                </TableBody>
              </Table>
            </TableContainer>
        </div>
    )
}

export default FormTable
