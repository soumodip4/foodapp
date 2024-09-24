import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { remove_user, show_product } from '../../Redux/CrudSlice'
import {CardActionArea, Pagination, Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import SweetAlertComponent from '../Sweetealert/Sweetalert'
// import {SweetAlertComponent} from "react-bootstrap-sweetalert"
import './ShowProduct.css'

const ShowProducts = () => {
    const { list, totalpage } = useSelector((state) => state.product)
    const dispatch = useDispatch()
const navigate = useNavigate()
    const [totalRecords, setPage] = useState()
    const [delete_id, setDelete_id] = useState("")
    const [isdelete, setIsDelete] = useState(false)

    useEffect(() => {
        dispatch(show_product()).then(()=>{
            navigate("/showProducts")
        })
    }, [dispatch])

    const handelChange = (item, pageNo) => {
        setPage(pageNo)
        dispatch(show_product({
            page: pageNo,
            perpage: 10
        }))
    }

    const delete_func = () => {
        if (delete_id !== "") {
            dispatch(remove_user({
                id: delete_id
            })).then(() => {
                dispatch(show_product())
            })
            setDelete_id("")
            setIsDelete(false)
        }
    }

    return (
        <>
         <div className='grid-div'>
            <Grid container spacing={4}>
                
                {list?.map((item) => (
                    <Grid className='second-grid' item xs={12} sm={12} md={6} key={item._id}>
                       
                        <Card className='main-card' sx={{ maxWidth: 545 }}>
                            <CardActionArea>
                                <CardMedia className='card-media'
                                    component="img"
                                    height="140"
                                    image={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
                                    alt={item?.title}
                                />
                                <CardContent>
                                    <Typography  gutterBottom variant="h5" component="div">
                                       <h3 className='title'>{item?.title}</h3> 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       <h4 className='description' >{item?.description}</h4> 
                                    </Typography>
                                    <Button className='s-btn'>
                                    <Link to="" onClick={() => {
                                        setDelete_id(item?._id)
                                        setIsDelete(true)
                                    }}>
                                        Delete
                                    </Link>
                                </Button>
                                <Button className='s-btn'>
                                    <Link to={`/Edit/${item?._id}`}>
                                        Edit
                                    </Link>
                                </Button>
                                

                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                
                                
                            </CardActions> */}
                        </Card>
                        
                    </Grid>
                    
                ))}
               
            </Grid>

            </div>

            {isdelete && (
                <SweetAlertComponent
                style={{zIndex:"1"}}
                    confirm={delete_func}
                    cancel={() => setIsDelete(false)}
                    title={"Are you sure?"}
                    subtitle={"You will not be able to recover this product!"}
                />
            )}
            
            <Pagination
            className='Pagination'
                count={totalpage}
                onChange={handelChange}
                totalRecords={totalRecords}
                color="secondary"
            />
        </>
    )
}

export default ShowProducts
