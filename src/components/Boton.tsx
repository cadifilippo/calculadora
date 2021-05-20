import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

const Boton = ({texto, color = '#2D2D2D', ancho = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          backgroundColor: color,
          ...styles.boton,
          width: ancho ? 156 : 72,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Boton;
