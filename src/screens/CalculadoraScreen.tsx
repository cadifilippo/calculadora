import React from 'react';
import {Text, View} from 'react-native';
import Boton from '../components/Boton';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    delNumero,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <Boton texto="C" color="#9B9B9B" action={limpiar} />
        <Boton texto="+/-" color="#9B9B9B" action={positivoNegativo} />
        <Boton texto="del" color="#9B9B9B" action={delNumero} />
        <Boton texto="/" color="#FF9427" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" action={armarNumero} />
        <Boton texto="8" action={armarNumero} />
        <Boton texto="9" action={armarNumero} />
        <Boton texto="x" color="#FF9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="4" action={armarNumero} />
        <Boton texto="5" action={armarNumero} />
        <Boton texto="6" action={armarNumero} />
        <Boton texto="-" color="#FF9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="1" action={armarNumero} />
        <Boton texto="2" action={armarNumero} />
        <Boton texto="3" action={armarNumero} />
        <Boton texto="+" color="#FF9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="0" action={armarNumero} ancho />
        <Boton texto="." action={armarNumero} />
        <Boton texto="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
