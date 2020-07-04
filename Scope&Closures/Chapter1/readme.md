# Javascript Scopes

## Javascript contains basic two types of scope: function scope (pre ES5) and block scope, with introduction of let and const in ES5


# Javascript scope and closures module

## Javascript is a compiled language. It is not compiled well in advance but it is a compiled language.

### It consists of 3 Three parts
* Tokenizing/Lexing
* Parsing
* Code generation


### Tokenizing/Lexing 
Breaking up of strings of character into chunks of tokens

### Parsing 

Converting chunks of token into AST (Abstract syntax tree)

### Code generation

Conversion of AST into executable code


# The compiler compiles the code first and later the engine executes it, variable declaration and function declaration are handled by the Compiler. Varaible assignment and function assignment are done by the Engine. This is why Hositing is possible in JS



## LHS vs RHS assignment
#
 * LHS vs RHS assignment
 * var a=9 --here a is LHS assigned
 * var a = b+8; -- here b is RHS assigned
 * console.log(c) -- here c is RHS assigned

