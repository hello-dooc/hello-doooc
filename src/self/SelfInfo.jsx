// import React, { Component } from 'react';
// import axios from 'axios'
// import {withRouter} from 'react-router-dom'
// import {get} from '@u/http'

// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// import SelfInfoWrap from './StyledSelf'
// // import UserInfo from './UserInfo'
// import Header from '@c/header/Header'
// import Link from '@c/link/Link'
// import Footer from '@c/footer/Footer'
// // import profile from '@a/images/timg.jpeg'
// import banner from '@a/images/banner_dog.png'
// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }
// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//       message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
//   }

// @withRouter
// class SelfInfo extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             addressList:[],
//             loading: false,
//             userInfo:[],
//         }
//     }
//     handleChange = info => {
//         if (info.file.status === 'uploading') {
//           this.setState({ loading: true });
//           return;
//         }
//         if (info.file.status === 'done') {
//           // Get this url from response in real world.
//           getBase64(info.file.originFileObj, imageUrl =>
//             this.setState({
//               imageUrl,
//               loading: false,
//             }),
//           );
//         }
//       };
    
//     async getAddressList(){
//         axios.defaults.headers.common["token"] = 'token_123456';
//         let result = await get({
//             url:'http://123.56.160.44:8080/user/address/list',
//         })
//         console.log(result);
//         let aList=result.data.data;
//         let arr=aList.reduce((arr,value)=>{
//             let addr = value.province+value.city+value.country+value.addressDetail;
//             let obj={};
//             obj.addr=addr;
//             obj.userName=value.userName;
//             obj.userTelephone=value.userTelephone
//             obj.addrId=value.userAddressId;
//             arr.push(obj);
//             return arr;
//         },[])
//         this.setState({
//             addressList:arr
//         })
//     }
//     async getUserInfo(){
//         axios.defaults.headers.common["token"] = 'token_123456';
//         let result = await get({
//             url:'http://123.56.160.44:8080/user/info/detail'
//         })
//         let info = result.data.data;
//         console.log(result);
//         let addr = info.addressInfo.province+info.addressInfo.city+info.addressInfo.country+info.addressInfo.addressDetail;
//         this.setState({
//             userInfo:{
//                 ...info,
//                 addr
//             }
//         })
//     }
//     componentDidMount(){
//         this.getAddressList()
//         // this.getUserInfo()
//     }
    
//     render() {
//         const { loading, imageUrl } = this.state;
//         const uploadButton = (
//         <div>
//             {loading ? <LoadingOutlined /> : <PlusOutlined />}
//             <div style={{ marginTop: 8 }}>Upload</div>
//         </div>
//         );
//         return (
//             <SelfInfoWrap id="self">
//                 <Header ht="546px" bg={banner}></Header>
//                 <div className="self-wrap"> 
//                     <div className="self_info">
//                         <Upload
//                             name="avatar"
//                             listType="picture-card"
//                             className="avatar-uploader"
//                             showUploadList={false}
//                             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//                             beforeUpload={beforeUpload}
//                             onChange={this.handleChange}
//                         >
//                             {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
//                         </Upload>
//                         {/* <UserInfo userInfo={this.state.userInfo} addressList={this.state.addressList}></UserInfo> */}
//                     </div>
//                 </div>
//                 <Link></Link>
//                 <Footer></Footer>
//             </SelfInfoWrap>
//         );
//     }
// }

// export default SelfInfo;


import React, { Component } from 'react';

class SelfInfo extends Component {
    render() {
        return (
            <div>
                1vsdvdvdx
            </div>
        );
    }
}

export default SelfInfo;