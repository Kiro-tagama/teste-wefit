import { useNavigate } from "react-router-dom";
import { Button, Card } from "../styles/styles";
import SvgSuccess from "../assets/svgs/SvgSuccess";

export function PurchaseMade() {
    const nav = useNavigate()
    return (
    <Card style={{gap:24}}>
        <h2 style={{fontSize:20,fontWeight:700,textAlign:"center"}}>
            Compra realizada com sucesso!
        </h2>
        <SvgSuccess/>
        <Button onClick={()=>nav('/')} style={{maxWidth:173}}>
            VOLTAR
        </Button>
    </Card>
    );
}
