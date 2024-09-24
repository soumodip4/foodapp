import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axiosInstance from "./Helper"
import { product_create } from "../API/Endpoints/Endpoint" 
import { product_show } from "../API/Endpoints/Endpoint"
import { delete_user } from "../API/Endpoints/Endpoint"

const initialState = {
    uplodStatus: "idle",
    // products: [],
    list: [{}],
    totalpage: "",
    // productData:[{}],
    products:[{}],
    upload_status:"idle"


}

export const product_submit = createAsyncThunk("product",
    async(data) => {
        const res = await axiosInstance.post(product_create.product,data)
        const resData = await res?.data
        return resData
    }
)

export const show_product = createAsyncThunk("show",
    async(data) => {
        const res = await axiosInstance.post(product_show.show,data)
        const resData = await res?.data
        console.log(resData)
        return resData
    }
)


// export const EditList = createAsyncThunk(
//     "edit",
//     async (id) => {
//       let res = await axiosInstance.get(`/product/detail/${id}`);
//       const resData= res?.data
//       return resData
//     }
//   )
  
//   export const EditUser = createAsyncThunk(
//     "update",
//     async (formData) => {
//       let res = await axiosInstance.post(`/product/detail/`, formData)
//       const resData= res?.data
//       return resData
//     }
//   )

export const editProduct=createAsyncThunk("edit_product",
    async(id)=>{
    const res=await axiosInstance.get(`/product/detail/${id}`);
  const resData=await res?.data;
  return resData
    }
   )
   export const updateProduct=createAsyncThunk("update_product",
    async(formData)=>{
    let res=await axiosInstance.post(`/product/update`,formData);
    let resData=res?.data
    return resData
    }
   )

export const remove_user = createAsyncThunk("remove",
    async(data) => {
        const res = await axiosInstance.post(`/product/remove`,data);
        const result = res?.data;

       // console.log(res?.data)
        return result?.data;

        // return resData
    }
)






export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(product_submit.pending,(state,{payload})=>{
            state.uplodStatus ="Loading"
        })

        .addCase(product_submit.fulfilled,(state,{payload})=>{
            state.uplodStatus ="success"
        })

        .addCase(product_submit.rejected,(state,{payload})=>{
            state.uplodStatus ="faild"
        })


        .addCase(show_product.pending,(state,{payload})=>{
            state.uplodStatus ="Loading"
        })

        .addCase(show_product.fulfilled,(state,{payload})=>{
            state.uplodStatus ="success"
            state.list = payload?.data
            state.totalpage = payload?.totalPages
        })

        .addCase(show_product.rejected,(state,{payload})=>{
            state.uplodStatus ="faild"
        })


        // .addCase(EditList.pending, (state, { payload }) => {
        //     state.uplodStatus = "loading"
        //   })
        //   .addCase(EditList.fulfilled, (state, { payload }) => {
        //     state.uplodStatus = "success";
        //     state. productData = payload?.data
        //   })
        //   .addCase(EditList.rejected, (state, { payload }) => {
        //     state.uplodStatus = "idle"
        //   })
        //   .addCase(EditUser.pending, (state, { payload }) => {
        //     state.uplodStatus = "loading"
        //   })
        //   .addCase(EditUser.fulfilled, (state, { payload }) => {
        //     state.uplodStatus = "idle"
        //   })
        //   .addCase(EditUser.rejected, (state, { payload }) => {
        //     state.uplodStatus = "idle"
        //   })


        .addCase(editProduct.pending,(state)=>{
            state.upload_status="loading"
            })
            .addCase(editProduct.fulfilled,(state,{payload})=>{
            state.upload_status="success";
            state.products=payload?.data
            })
            .addCase(editProduct.rejected,(state)=>{
            state.upload_status="failed"
            })
            .addCase(updateProduct.pending,(state)=>{
            state.upload_status="loading"
            })
            .addCase(updateProduct.fulfilled,(state)=>{
              state.upload_status="success"
              })
              .addCase(updateProduct.rejected,(state)=>{
                state.upload_status="failed"
                })
            


        .addCase(remove_user.pending, (state, { payload }) => {
            state.uplodStatus = "loading"
          })
          .addCase(remove_user.fulfilled, (state, { payload }) => {

            state.uplodStatus = "idle"
          })
          .addCase(remove_user.rejected, (state, { payload }) => {
            state.uplodStatus = "idle"
          })
    }
       
})