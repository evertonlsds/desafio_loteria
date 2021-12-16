export default function NumeroDisplay(props){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            heigth: "100px",
            width:"100px",
            borderRadius: "50px",
            backgroundColor: "#034915",
            color: "gold",
            fontSize: "4rem",
            margin: "20px",
            padding: "8px"

        }}>
            {props.numero}
        </div>
    )
}