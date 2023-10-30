
import Float "mo:base/Float";

actor Calculadora {

  var result=0.0;

  public query func add(valor1 : Float, valor2 : Float) : async Float {
    result := valor1 + valor2;
    return result;
  };

  public func substract(valor1 : Float, valor2 : Float) : async Float {
    result := valor1 - valor2;
    return result;
  };

  public func multiply(valor1 : Float, valor2 : Float) : async Float {
    result := valor1 * valor2;
    return result;
  };

  public func divide(valor1 : Float, valor2 : Float) : async Float {
    if (valor2 == 0) {
      return 0; 
    } else {
      result := valor1 / valor2;
      return result;
    }
  };

  public func exp(valor1 : Float, valor2 : Float) : async Float {
    result := valor1 ** valor2;
    return result;
  };
};