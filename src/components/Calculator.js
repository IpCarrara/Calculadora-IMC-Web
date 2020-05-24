import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'



class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {weight: '', height: '', imc: '', message: '', bestWeight: ''};
        this.handleChange = this.handleChange.bind(this);
        this.calculateImc = this.calculateImc.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    calculateImc(){
        let heightSquared = (this.state.height/100 * this.state.height/100);
        let imc = this.state.weight / heightSquared;
        let low = Math.round(18.5 * heightSquared);
        let high = Math.round(24.99 * heightSquared);
        let message = "";
            if(imc < 16.9){
                message="VOCÊ ESTÁ MUITO ABAIXO DO PESO";
            }
            else if (imc >= 17 && imc <= 18.4){
                message = "VOCÊ ESTÁ ABAIXO DO PESO";
            }
            else if (imc >= 18.5 && imc <= 24.9){
                message = "PARABÉNS! SEU PESO ESTÁ NORMAL";
            }
            else if(imc >= 25 && imc <= 29.9){
                message = "VOCÊ ESTÁ ACIMA DO PESO";
            }
            else if(imc >= 30 && imc <= 34.9){
                message = "VOCÊ ESTÁ COM OBESIDADE GRAU I";
            }
            else if(imc >= 35 && imc <= 39.9){
                message = "VOCÊ ESTÁ COM OBESIDADE GRAU II";
            }
            else if(imc >= 40 ){
                message= "VOCÊ ESTÁ COM OBESIDADE GRAU III";
            }
            this.setState({
            imc: Math.round(imc * 100) / 100,
            bestWeight: " Seu peso ideal deve ficar entre " +low+ " a "+high+ "kg",
            message
            }, () => console.log(this.state));
        
    }

    handleSubmit(e){
        this.calculateImc();
        e.preventDefault();
        console.log(this.state);
        
    }

    render(){
        return(
            <div className="container">
                <Container> 
                    <Row>
                        <Col lg>
                            <div className="appTela">
                                <div className="appComponentes">
                                    <div>
                                        <h3 className="appTitulo">Índice de Massa Corporal</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <label className="appTituloComponentes">Peso</label>
                                        <br></br>
                                        <input type="number" name="weight" value={this.state.weight} onChange={this.handleChange} />
                                        <label className="exTexto">Exemplo: 65</label>
                                        <br></br>
                                        <label className="appTituloComponentes">Altura</label>
                                        <br></br>
                                        <input type="number" name="height" value={this.state.height} onChange={this.handleChange} />
                                        <label className="exTexto">Exemplo: 175</label>
                                        <br></br>
                                        <input type="submit" value="Calcular" className="botao"/>
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col lg>
                            <div className="cadernoContainer">
                                <div className="caderno">
                                    <h3  className="tituloImc fontCaderno">Índice de Massa Corporal</h3>
                                    <p className="significadoImc fontCaderno">É um cálculo que serve para avaliar se a 
                                        pessoa está dentro do seu peso ideal em relação à altura.</p>
                                    <p><span className="resultadoTitulo fontCaderno">IMC: </span>{this.state.imc}</p>
                                    <p><span className="resultadoTitulo fontCaderno">Resultado: </span>{this.state.message}</p> 
                                    <p><span className="resultadoTitulo fontCaderno">Dica: </span>{this.state.bestWeight}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Calculator;
