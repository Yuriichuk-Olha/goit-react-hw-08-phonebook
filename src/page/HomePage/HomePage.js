const style = {
    conteiner:{
        display:'flex',
        alingItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    }
}


const HomePage= () => {
    <div style={style.conteiner}>
        <h1 style={style.title}>Hello</h1>
    </div>
}

export default HomePage