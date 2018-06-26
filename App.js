import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Botao extends Component {

	constructor(props) {
		super(props);
    this.state = {};
    //c = quantidade de linhas que um botão ocupa
      //padrão é 1 mas se existir troca por ela o flex
		let c = 1;
		if(props.c) {
			c = parseInt(props.c);
		}
    //por padrão a cor é cinza se tiver cor especificando altera para ela
		let bg = '#E0E0E0';
		if(props.bg) {
			bg = props.bg;
		}


		this.styles = StyleSheet.create({
      //botão cinza
			area:{
				flex:c,
				justifyContent:'center',
				alignItems:'center',
				borderWidth:1,
				borderColor:'#999999',
				backgroundColor:bg
      },
      //tamanho da letra dentro do botão
			text:{
				fontSize:18
			}
		});
	}

	render() {
		return (
      //TouchableOpacity clicavel
			<TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
				<Text style={this.styles.text}>{this.props.n}</Text>
			</TouchableOpacity>
		);
	}

}

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {r:'0'};
    //para mostrar o resultado
		this.btn = this.btn.bind(this);
	}

	btn(b) {
		let s = this.state;
 //clicando no c passa 0
		if(b == 'C') {
			s.r = '0';
    }
    //quando apertar o = executa a função eval e da o resultado da operação
		else if(b == '=') {
			s.r = eval(s.r);
    }
    ////se for zero ele substitui pelo numero, se não ele acrescenta os numeros para a operação
		else {
			if(s.r == '0') {
				s.r = b;
			} else {
				s.r += b;
			}
		}

		this.setState(s);
	}
//this.state.r = tela de resultado
	render() {
		return (
			<View style={styles.body}>
				<View style={styles.linha}>
					<Text style={styles.res}>{this.state.r}</Text>
				</View>
				<View style={styles.linha}>
					<Botao c="3" n="C" bg="#CCCCCC" onPress={()=>{this.btn("C")}} />
					<Botao n="/" bg="#FD9536" onPress={()=>{this.btn("/")}} />
				</View>
				<View style={styles.linha}>
					<Botao n="7" onPress={()=>{this.btn("7")}} />
					<Botao n="8" onPress={()=>{this.btn("8")}} />
					<Botao n="9" onPress={()=>{this.btn("9")}} />
					<Botao n="*" bg="#FD9536" onPress={()=>{this.btn("*")}} />
				</View>
				<View style={styles.linha}>
					<Botao n="4" onPress={()=>{this.btn("4")}} />
					<Botao n="5" onPress={()=>{this.btn("5")}} />
					<Botao n="6" onPress={()=>{this.btn("6")}} />
					<Botao n="-" bg="#FD9536" onPress={()=>{this.btn("-")}} />
				</View>
				<View style={styles.linha}>
					<Botao n="1" onPress={()=>{this.btn("1")}} />
					<Botao n="2" onPress={()=>{this.btn("2")}} />
					<Botao n="3" onPress={()=>{this.btn("3")}} />
					<Botao n="+" bg="#FD9536" onPress={()=>{this.btn("+")}} />
				</View>
        
				<View style={styles.linha}>
        
					<Botao c="2" n="0" onPress={()=>{this.btn("0")}} />
					<Botao n="." onPress={()=>{this.btn(".")}} />
					<Botao n="=" bg="#FD9536" onPress={()=>{this.btn("=")}} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body:{
		paddingTop:20,
		flex:1
	},
	linha:{
		flex:1,
		flexDirection:'row'
	},
	res:{
		backgroundColor:'#000000',
		color:'#FFFFFF',
		fontSize:50,
		flex:1,
		textAlign:'right'
	}
});















