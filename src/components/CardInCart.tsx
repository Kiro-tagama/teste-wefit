import styled from "styled-components";
import { PropsProduts, useMyContext } from "../context/context";
import Trash from "../assets/Trash";
import IconMinus from "../assets/IconMinus";
import IconPlus from "../assets/IconPlus";

export function CardInCart() {
    const { list, inCart, removeItem, updateQuantity } = useMyContext();

    const cardInWeb=(
        <table style={{width:"100%"}}>
            <thead>
                <tr>
                {['PRODUTO', 'QTD', 'SUBTOTAL', ''].map((txt: string) => <th style={{ margin: 0, flex: txt == '' ? 0 : 1, fontSize: 14, fontWeight: 700, color: "#999" }}>{txt}</th>
                )}
                </tr>
            </thead>
            <tbody>
                {list.map((item) => {
                    if (inCart[item.id] > 0) {
                        return (
                            <tr key={item.id}>
                                <td style={{ display: "flex", flex: 1, gap: 16, alignItems: "center" }}>
                                    <img src={item.image} alt={item.title} style={{ width: "5.5rem", height: "auto" }} />
                                    <div>
                                        <p style={{ fontWeight: 700, fontSize: 14, margin: 0, marginBottom: 8 }}>{item.title}</p>
                                        <p style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>R$ {item.price.toFixed(2)}</p>
                                    </div>
                                </td>
                                <td>
                                    <div style={{display:"flex",flexDirection:"row",gap:11,alignItems:"center"}}>
                                    <BottunUpdate onClick={() => updateQuantity(item.id, inCart[item.id] - 1)}><IconMinus/></BottunUpdate>
                                    <QTDValue>{inCart[item.id]}</QTDValue>
                                    <BottunUpdate onClick={() => updateQuantity(item.id, inCart[item.id] + 1)}><IconPlus/></BottunUpdate>
                                    </div>
                                </td>

                                <td>
                                    <p style={{ fontWeight: 700, fontSize: 16, margin: 0, flex: 1 }}>R$ {(item.price * inCart[item.id]).toFixed(2)}</p>
                                </td>

                                <td style={{ textAlign: "end" }}>
                                    <span onClick={() => removeItem(item.id)} style={{ cursor: "pointer" }}><Trash /></span>
                                </td>
                            </tr>
                        );
                    }
                    return null; // Ignora os itens com quantidade zero
                })}
            </tbody>
        </table>
    )

    const cardInMobile=(
        <div style={{display:"flex",flexDirection:"column",gap:21}}>
        {list.map((item:PropsProduts) => {
            if (inCart[item.id] > 0) {
                return (
                    <div key={item.id} style={{display:'flex'}}>
                        <img src={item.image} alt={item.title} style={{ width: "5.5rem", height: "auto" }} />
                        <div style={{flex:1,display:"flex" ,flexDirection:"column"}}>
                            <MobileContainer>
                                <p style={{ fontWeight: 700, fontSize: 14, margin: 0, marginBottom: 8 }}>{item.title}</p>
                                <p style={{ fontWeight: 700, fontSize: 16, margin: 0, marginLeft:"auto",marginRight:16 }}>R$ {item.price.toFixed(2)}</p>
                                <span onClick={() => removeItem(item.id)} style={{ cursor: "pointer" }}><Trash /></span>
                            </MobileContainer>
                            <MobileContainer>
                                <div style={{display:"flex",flexDirection:"row",gap:11,alignItems:"center"}}>
                                    <BottunUpdate onClick={() => updateQuantity(item.id, inCart[item.id] - 1)}><IconMinus/></BottunUpdate>
                                    <QTDValue>{inCart[item.id]}</QTDValue>
                                    <BottunUpdate onClick={() => updateQuantity(item.id, inCart[item.id] + 1)}><IconPlus/></BottunUpdate>
                                </div>

                                <div>
                                    <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#999" }}>SUBTOTAL</p>
                                    <p style={{ fontWeight: 700, fontSize: 16, margin: 0, flex: 1 }}>R$ {(item.price * inCart[item.id]).toFixed(2)}</p>
                                </div>
                            </MobileContainer>
                        </div>
                    </div>
                );
            }
            return null;
        })}
        </div>
    )

    return(
        <>
            <ViewWeb>{cardInWeb}</ViewWeb>
            <ViewMobile>{cardInMobile}</ViewMobile>
        </>
    )
}

const ViewWeb = styled.div`
    width: 100%;
    @media (max-width: 528px) {
        display: none;
    }
`
const ViewMobile = styled.div`
    width: 100%;
    display: none;
    @media (max-width: 528px) {
        display: block;
    }
`

const MobileContainer= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding-left: 16px;
`

const BottunUpdate = styled.button`
    height: 18px;
    width: 18px;
    background-color: transparent;
    border: 2px solid #009EDD;
    color: #009EDD;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
`
const QTDValue= styled.span`
    height: 26px;
    width: 3.5rem;
    border-radius: 4px;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
`
