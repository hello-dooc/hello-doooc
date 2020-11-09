import styled from 'styled-components'

const DiseaseWrap = styled.div`
    .dis-wrap{
        width:1300px;
        margin:0 auto;
        .dis_tab{
            >ul{
                >li{
                    float:left;
                }
            }
        }
        .tit_left{
            float:left
        }
        .tit_right{
            float:right;
        }
    }
`

export {
    DiseaseWrap
}