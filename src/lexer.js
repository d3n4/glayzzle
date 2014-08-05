var conf = require('./php').context.conf;
/**
 * Declare a list of PHP tokens (used from PHP 5.5)
 * Extracted from zend_language_parser.h
 */
  var
     END = 0,
     T_REQUIRE_ONCE = 258,
     T_REQUIRE = 259,
     T_EVAL = 260,
     T_INCLUDE_ONCE = 261,
     T_INCLUDE = 262,
     T_LOGICAL_OR = 263,
     T_LOGICAL_XOR = 264,
     T_LOGICAL_AND = 265,
     T_PRINT = 266,
     T_YIELD = 267,
     T_SR_EQUAL = 268,
     T_SL_EQUAL = 269,
     T_XOR_EQUAL = 270,
     T_OR_EQUAL = 271,
     T_AND_EQUAL = 272,
     T_MOD_EQUAL = 273,
     T_CONCAT_EQUAL = 274,
     T_DIV_EQUAL = 275,
     T_MUL_EQUAL = 276,
     T_MINUS_EQUAL = 277,
     T_PLUS_EQUAL = 278,
     T_BOOLEAN_OR = 279,
     T_BOOLEAN_AND = 280,
     T_IS_NOT_IDENTICAL = 281,
     T_IS_IDENTICAL = 282,
     T_IS_NOT_EQUAL = 283,
     T_IS_EQUAL = 284,
     T_IS_GREATER_OR_EQUAL = 285,
     T_IS_SMALLER_OR_EQUAL = 286,
     T_SR = 287,
     T_SL = 288,
     T_INSTANCEOF = 289,
     T_UNSET_CAST = 290,
     T_BOOL_CAST = 291,
     T_OBJECT_CAST = 292,
     T_ARRAY_CAST = 293,
     T_STRING_CAST = 294,
     T_DOUBLE_CAST = 295,
     T_INT_CAST = 296,
     T_DEC = 297,
     T_INC = 298,
     T_CLONE = 299,
     T_NEW = 300,
     T_EXIT = 301,
     T_IF = 302,
     T_ELSEIF = 303,
     T_ELSE = 304,
     T_ENDIF = 305,
     T_LNUMBER = 306,
     T_DNUMBER = 307,
     T_STRING = 308,
     T_STRING_VARNAME = 309,
     T_VARIABLE = 310,
     T_NUM_STRING = 311,
     T_INLINE_HTML = 312,
     T_CHARACTER = 313,
     T_BAD_CHARACTER = 314,
     T_ENCAPSED_AND_WHITESPACE = 315,
     T_CONSTANT_ENCAPSED_STRING = 316,
     T_ECHO = 317,
     T_DO = 318,
     T_WHILE = 319,
     T_ENDWHILE = 320,
     T_FOR = 321,
     T_ENDFOR = 322,
     T_FOREACH = 323,
     T_ENDFOREACH = 324,
     T_DECLARE = 325,
     T_ENDDECLARE = 326,
     T_AS = 327,
     T_SWITCH = 328,
     T_ENDSWITCH = 329,
     T_CASE = 330,
     T_DEFAULT = 331,
     T_BREAK = 332,
     T_CONTINUE = 333,
     T_GOTO = 334,
     T_FUNCTION = 335,
     T_CONST = 336,
     T_RETURN = 337,
     T_TRY = 338,
     T_CATCH = 339,
     T_FINALLY = 340,
     T_THROW = 341,
     T_USE = 342,
     T_INSTEADOF = 343,
     T_GLOBAL = 344,
     T_PUBLIC = 345,
     T_PROTECTED = 346,
     T_PRIVATE = 347,
     T_FINAL = 348,
     T_ABSTRACT = 349,
     T_STATIC = 350,
     T_VAR = 351,
     T_UNSET = 352,
     T_ISSET = 353,
     T_EMPTY = 354,
     T_HALT_COMPILER = 355,
     T_CLASS = 356,
     T_TRAIT = 357,
     T_INTERFACE = 358,
     T_EXTENDS = 359,
     T_IMPLEMENTS = 360,
     T_OBJECT_OPERATOR = 361,
     T_DOUBLE_ARROW = 362,
     T_LIST = 363,
     T_ARRAY = 364,
     T_CALLABLE = 365,
     T_CLASS_C = 366,
     T_TRAIT_C = 367,
     T_METHOD_C = 368,
     T_FUNC_C = 369,
     T_LINE = 370,
     T_FILE = 371,
     T_COMMENT = 372,
     T_DOC_COMMENT = 373,
     T_OPEN_TAG = 374,
     T_OPEN_TAG_WITH_ECHO = 375,
     T_CLOSE_TAG = 376,
     T_WHITESPACE = 377,
     T_START_HEREDOC = 378,
     T_END_HEREDOC = 379,
     T_DOLLAR_OPEN_CURLY_BRACES = 380,
     T_CURLY_OPEN = 381,
     T_PAAMAYIM_NEKUDOTAYIM = 382,
     T_NAMESPACE = 383,
     T_NS_C = 384,
     T_DIR = 385,
     T_NS_SEPARATOR = 386
  ;

// check if is a 
var IS_LABEL_START = function(c) {
  return (
    c >= 'a' && c <= 'z'
  ) || (
    c >= 'A' && c <= 'Z'
  ) || (
    c == '_' || c >= 0x7F
  );
};

// escapes chars
var scan_escape_string = function(str) {
  return str;
};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        if ( ch == '\r' && this._input[1] == '\n' ) {
          // eat next '\n' char
          ch += '\n'; 
          this.yyleng++;
          this.offset++;
          this._input = this._input.slice(1);
          if (this.options.ranges) {
              this.yylloc.range[1]++;
          }
        }
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true,"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
  this.begin("ST_IN_SCRIPTING");
  return T_OPEN_TAG;

break;
case 1:
  if (conf.asp_tags) {
    this.begin("ST_IN_SCRIPTING");
    return T_OPEN_TAG_WITH_ECHO;
  } else {
    this.reject();
  }

break;
case 2:
  this.begin("ST_IN_SCRIPTING");
  return T_OPEN_TAG_WITH_ECHO;

break;
case 3:
  if (conf.asp_tags) {
    this.begin("ST_IN_SCRIPTING");
    return T_OPEN_TAG;
  } else {
    this.reject();
  }

break;
case 4:
  this.begin("ST_IN_SCRIPTING");
  return T_OPEN_TAG;

break;
case 5:
  if (conf.short_tags) {
    this.begin("ST_IN_SCRIPTING");
    return T_OPEN_TAG;
  } else {
    console.log(this);
    throw new Error('Unauth state');
    this.unput("<?");
  }

break;
case 6:
  while(this._input.length > 0) {
    var char = this.input();
    if (char == '<') {
      var q = this.input();
      /*if (q == 's' && this._input.substring(0, 6) == 'cript ') {
          this.unput('<s');
          break;
      } else */ 
      if(q == '?') {
        if (
          this._input.substring(0, 3) == 'php' || this._input.substring(0, 1) == '='
        ) {
          this.unput('<?');
          break;
        } else if (conf.short_tags) {
          this.unput('<?');
          break;
        }
      } else if(conf.asp_tags && q == '%') {
        this.unput('<%');
        break;
      }
    }
  }
  return T_INLINE_HTML;

break;
case 7:
  var c = this.input();
  if ( 
    c != '\r\n'
    && c != '\n'
    && c != '\r'
  ) {
    this.unput(c);
  }
  this.popState();
  return T_CLOSE_TAG;

break;
case 8:
  if (conf.asp_tags) {
    this.popState();
    return T_CLOSE_TAG;  /* implicit ';' at php-end tag */
  } else {
    this.less(1);
    return yy_.yytext;
  }

break;
case 9:
	return T_EXIT;

break;
case 10:
	return T_EXIT;

break;
case 11:
	return T_FUNCTION;

break;
case 12:
	return T_CONST;

break;
case 13:
	return T_RETURN;

break;
case 14:
	return T_YIELD;

break;
case 15:
	return T_TRY;

break;
case 16:
	return T_CATCH;

break;
case 17:
	return T_FINALLY;

break;
case 18:
	return T_THROW;

break;
case 19:
	return T_IF;

break;
case 20:
	return T_ELSEIF;

break;
case 21:
	return T_ENDIF;

break;
case 22:
	return T_ELSE;

break;
case 23:
	return T_WHILE;

break;
case 24:
	return T_ENDWHILE;

break;
case 25:
	return T_DO;

break;
case 26:
	return T_FOR;

break;
case 27:
	return T_ENDFOR;

break;
case 28:
	return T_FOREACH;

break;
case 29:
	return T_ENDFOREACH;

break;
case 30:
	return T_DECLARE;

break;
case 31:
  return T_ENDDECLARE;

break;
case 32:
  return T_INSTANCEOF;

break;
case 33:
  return T_AS;

break;
case 34:
	return T_SWITCH;

break;
case 35:
	return T_ENDSWITCH;

break;
case 36:
	return T_CASE;

break;
case 37:
	return T_DEFAULT;

break;
case 38:
	return T_BREAK;

break;
case 39:
	return T_CONTINUE;

break;
case 40:
	return T_GOTO;

break;
case 41:
	return T_ECHO;

break;
case 42:
	return T_PRINT;

break;
case 43:
	return T_CLASS;

break;
case 44:
	return T_INTERFACE;

break;
case 45:
	return T_TRAIT;

break;
case 46:
	return T_EXTENDS;

break;
case 47:
	return T_IMPLEMENTS;

break;
case 48:
  this.begin('ST_LOOKING_FOR_PROPERTY');
  return T_OBJECT_OPERATOR;

break;
case 49:
  return T_WHITESPACE;

break;
case 50:
	return T_OBJECT_OPERATOR;

break;
case 51:
  return T_STRING;

break;
case 52:
  this.popState();
  this.unput(yy_.yytext);

break;
case 53:
  return T_PAAMAYIM_NEKUDOTAYIM;

break;
case 54:
	return T_NS_SEPARATOR;

break;
case 55:
	return T_NEW;

break;
case 56:
	return T_CLONE;

break;
case 57:
	return T_VAR;

break;
case 58:
	return T_INT_CAST;

break;
case 59:
	return T_DOUBLE_CAST;

break;
case 60:
	return T_STRING_CAST;

break;
case 61:
	return T_ARRAY_CAST;

break;
case 62:
	return T_OBJECT_CAST;

break;
case 63:
	return T_BOOL_CAST;

break;
case 64:
	return T_UNSET_CAST;

break;
case 65:
	return T_EVAL;

break;
case 66:
	return T_INCLUDE;

break;
case 67:
	return T_INCLUDE_ONCE;

break;
case 68:
	return T_REQUIRE;

break;
case 69:
	return T_REQUIRE_ONCE;

break;
case 70:
	return T_NAMESPACE;

break;
case 71:
	return T_USE;

break;
case 72:
        return T_INSTEADOF;

break;
case 73:
	return T_GLOBAL;

break;
case 74:
	return T_ISSET;

break;
case 75:
	return T_EMPTY;

break;
case 76:
	return T_HALT_COMPILER;

break;
case 77:
	return T_STATIC;

break;
case 78:
	return T_ABSTRACT;

break;
case 79:
	return T_FINAL;

break;
case 80:
	return T_PRIVATE;

break;
case 81:
	return T_PROTECTED;

break;
case 82:
	return T_PUBLIC;

break;
case 83:
	return T_UNSET;

break;
case 84:
	return T_DOUBLE_ARROW;

break;
case 85:
	return T_LIST;

break;
case 86:
	return T_ARRAY;

break;
case 87:
 return T_CALLABLE;

break;
case 88:
	return T_INC;

break;
case 89:
	return T_DEC;

break;
case 90:
	return T_IS_IDENTICAL;

break;
case 91:
	return T_IS_NOT_IDENTICAL;

break;
case 92:
	return T_IS_EQUAL;

break;
case 93:
	return T_IS_NOT_EQUAL;

break;
case 94:
	return T_IS_SMALLER_OR_EQUAL;

break;
case 95:
	return T_IS_GREATER_OR_EQUAL;

break;
case 96:
	return T_PLUS_EQUAL;

break;
case 97:
	return T_MINUS_EQUAL;

break;
case 98:
	return T_MUL_EQUAL;

break;
case 99:
	return T_DIV_EQUAL;

break;
case 100:
	return T_CONCAT_EQUAL;

break;
case 101:
	return T_MOD_EQUAL;

break;
case 102:
	return T_SL_EQUAL;

break;
case 103:
	return T_SR_EQUAL;

break;
case 104:
	return T_AND_EQUAL;

break;
case 105:
	return T_OR_EQUAL;

break;
case 106:
	return T_XOR_EQUAL;

break;
case 107:
	return T_BOOLEAN_OR;

break;
case 108:
	return T_BOOLEAN_AND;

break;
case 109:
	return T_LOGICAL_OR;

break;
case 110:
	return T_LOGICAL_AND;

break;
case 111:
	return T_LOGICAL_XOR;

break;
case 112:
	return T_SL;

break;
case 113:
	return T_SR;

break;
case 114:
	this.begin("ST_IN_SCRIPTING");
	return '{';

break;
case 115:
	// @todo : RESET_DOC_COMMENT();
	this.popState();
	return '}';

break;
case 116:
	return T_CLASS_C;

break;
case 117:
	return T_TRAIT_C;

break;
case 118:
	return T_FUNC_C;

break;
case 119:
	return T_METHOD_C;

break;
case 120:
	return T_LINE;

break;
case 121:
	return T_FILE;

break;
case 122:
	return T_DIR;

break;
case 123:
	return T_NS_C;

break;
case 124:
	//yy_push_state(ST_LOOKING_FOR_VARNAME TSRMLS_CC);
	return T_DOLLAR_OPEN_CURLY_BRACES;

break;
case 125:
  this.less(yy_.yyleng-3);
  this.begin('ST_LOOKING_FOR_PROPERTY');
  return T_VARIABLE;

break;
case 126:
  this.less(1);
  this.pushState('ST_VAR_OFFSET');
  return T_VARIABLE;

break;
case 127:
  return T_VARIABLE;

break;
case 128:
  while(this._input.length > 0) {
    var char = this.input();
    if (char == '\\') {
      this.input();
    } else if (char == '\'') {
      break;
    }
  }
  return T_CONSTANT_ENCAPSED_STRING;

break;
case 129:
  while(this._input.length > 0) {
    var char = this.input();
    if (char == '\\') {
      char = this.input();
    } else if (char == '"') {
      break;
    } else if (char == '$') {
      char = this.input();
      if ( char == '{' || IS_LABEL_START(char)) {
        break;
      } else this.unput(char);
    } else if (char == '{') {
      char = this.input();
      if (char == '$') {
        break;
      } else this.unput(char);
    }
  }
  if (char == '"') {
    return T_CONSTANT_ENCAPSED_STRING;
  } else {
    this.less(1);
    this.begin("ST_DOUBLE_QUOTES");
    return '"';
  }

break;
case 130:
  this.heredoc_label = this.matches[2];
  if (this.heredoc_label[0] == '\'') {
    this.begin('ST_NOWDOC');
    this.heredoc_label = this.heredoc_label.substring(1, this.heredoc_label.length - 1);
  } else {
    if (this.heredoc_label[0] == '"') {
      this.heredoc_label = this.heredoc_label.substring(1, this.heredoc_label.length - 1);
    }
    this.begin('ST_HEREDOC');
  }
  return T_START_HEREDOC;

break;
case 131:
  this.begin("ST_BACKQUOTE");
  return '`';

break;
case 132:
  while(this._input.length > 0) {
    var char = this.input();
    if (char == ';') {
      this.unput(char);
      break;
    }
  }
  this.popState();
  this.popState();
  return T_END_HEREDOC;

break;
case 133:
  this.less(1);
  this.begin('ST_IN_SCRIPTING');
  return T_CURLY_OPEN;

break;
case 134:
  this.popState();
  return '"';

break;
case 135:
  this.popState();
  return '`';

break;
case 136:
  while(this._input.length > 0) {
    var char = this.input();
    if (char == '\\') {
      char = this.input();
    } else if (char == '"') {
      this.unput(char);
      break;
    } else if (char == '$') {
      char = this.input();
      if ( char == '{' || IS_LABEL_START(char)) {
        this.unput('$' + char);
        break;
      }
    } else if (char == '{') {
      char = this.input();
      if (char == '$') {
        this.unput('{$');
        break;
      }
    }
  }
  return T_ENCAPSED_AND_WHITESPACE;

break;
case 137:
  while(this._input.length > 0) {
    var char = this.input();
    if (char == '\\') {
      this.input();
    } else if ( char == '$' ) {
      if (
        this._input[0] == '{'
        || IS_LABEL_START(c)
      ) {
        this.unput(char);
        break;
      }
    } else if (char == '`') {
      this.unput(char);
      break;
    }
  }
  // yy_.yytext = scan_escape_string(yy_.yytext);
  return T_ENCAPSED_AND_WHITESPACE;

break;
case 138:
  while(this._input.length > 0) {
    var char = this.input();
    if (
      char == '\n'
      || char == '\r'
      || char == '\r\n'
    ) {
      char = this.input();
      if (IS_LABEL_START(char)) {
        var label = char;
        while(this._input.length > 0) {
          char = this.input();
          if (char == ';') {
            break;
          } else {
            label += char;
            if (label.length > this.heredoc_label.length) break;
          }
        }
        if (label == this.heredoc_label) break;
      }
    }
  }
  this.less(yy_.yytext.length - this.heredoc_label.length - 1);
  this.begin('ST_END_HEREDOC');
  return T_ENCAPSED_AND_WHITESPACE;

break;
case 139:
  while(this._input.length > 0) {
    var char = this.input();
    if (
      char == '\n'
      || char == '\r'
      || char == '\r\n'
    ) {
      char = this.input();
      if (IS_LABEL_START(char)) {
        var label = char;
        while(this._input.length > 0) {
          char = this.input();
          if (char == ';') {
            break;
          } else {
            label += char;
            if (label.length > this.heredoc_label.length) break;
          }
        }
        if (label == this.heredoc_label) break;
      }
    }
  }
  this.less(yy_.yytext.length - this.heredoc_label.length - 1);
  this.begin('ST_END_HEREDOC');
  return T_ENCAPSED_AND_WHITESPACE;

break;
case 140:
	return T_STRING_VARNAME;

break;
case 141:
  this.less(0);
  this.popState();
  this.pushState("ST_IN_SCRIPTING");
  this.reject();

break;
case 142: /* Offset could be treated as a long */
	return T_NUM_STRING;

break;
case 143: /* Offset must be treated as a string */
	return T_NUM_STRING;

break;
case 144:
	return ']';

break;
case 145:
	return yy_.yytext;

break;
case 146:
	return T_ENCAPSED_AND_WHITESPACE;

break;
case 147:
	return T_STRING;

break;
case 148:
  return T_DNUMBER;

break;
case 149:
  return T_LNUMBER;

break;
case 150:
		return T_LNUMBER;

break;
case 151:
  return T_LNUMBER;

break;
case 152:
  while(this._input.length > 0) {
    var char = this.input();
    if (
      char == '\r'
      || char == '\n'
      || char == '\r\n'
    ) {
      break;
    } else if (
      char == '?'
      && this._input[0] == '>'
    ) {
      // end of PHP tag
      this.unput(char);
      break;
    } else if (
      conf.asp_tags
      && char == '%'
      && this._input[0] == '>'
    ) {
      // end of PHP(ASP-Like) tag
      this.unput(char);
      break;
    }
  }
  return T_COMMENT;

break;
case 153:
  var type = T_COMMENT;
  if (yy_.yytext.length > 2) {
    type = T_DOC_COMMENT;
  }
  while(this._input.length > 0) {
    var char = this.input();
    if (
      char == '*'
      && this._input[0] == '/'
    ) {
      this.input();
      break;
    }
  }
  return type;

break;
case 154:
	return yy_.yytext;

break;
case 155:
  this.reject();

break;
case 156:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:<script([ \n\r\t]+)+language([ \n\r\t]+)*=([ \n\r\t]+)*(php|"php"|'php')([ \n\r\t]+)*>)/i,/^(?:<%=)/i,/^(?:<\?=)/i,/^(?:<%)/i,/^(?:<\?php([ \t]|((\r\n|\n|\r))))/i,/^(?:<\?)/i,/^(?:([^]))/i,/^(?:(\?>|<\/script([ \n\r\t]+)*>)((\r\n|\n|\r))?)/i,/^(?:%>((\r\n|\n|\r))?)/i,/^(?:exit)/i,/^(?:die)/i,/^(?:function)/i,/^(?:const)/i,/^(?:return)/i,/^(?:yield)/i,/^(?:try)/i,/^(?:catch)/i,/^(?:finally)/i,/^(?:throw)/i,/^(?:if)/i,/^(?:elseif)/i,/^(?:endif)/i,/^(?:else)/i,/^(?:while)/i,/^(?:endwhile)/i,/^(?:do)/i,/^(?:for)/i,/^(?:endfor)/i,/^(?:foreach)/i,/^(?:endforeach)/i,/^(?:declare)/i,/^(?:enddeclare)/i,/^(?:instanceof)/i,/^(?:as)/i,/^(?:switch)/i,/^(?:endswitch)/i,/^(?:case)/i,/^(?:default)/i,/^(?:break)/i,/^(?:continue)/i,/^(?:goto)/i,/^(?:echo)/i,/^(?:print)/i,/^(?:class)/i,/^(?:interface)/i,/^(?:trait)/i,/^(?:extends)/i,/^(?:implements)/i,/^(?:->)/i,/^(?:([ \n\r\t]+)+)/i,/^(?:->)/i,/^(?:([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*))/i,/^(?:([^]))/i,/^(?:::)/i,/^(?:\\)/i,/^(?:new)/i,/^(?:clone)/i,/^(?:var)/i,/^(?:\(([ \t]*)(int|integer)([ \t]*)\))/i,/^(?:\(([ \t]*)(real|double|float)([ \t]*)\))/i,/^(?:\(([ \t]*)(string|binary)([ \t]*)\))/i,/^(?:\(([ \t]*)array([ \t]*)\))/i,/^(?:\(([ \t]*)object([ \t]*)\))/i,/^(?:\(([ \t]*)(bool|boolean)([ \t]*)\))/i,/^(?:\(([ \t]*)(unset)([ \t]*)\))/i,/^(?:eval)/i,/^(?:include)/i,/^(?:include_once)/i,/^(?:require)/i,/^(?:require_once)/i,/^(?:namespace)/i,/^(?:use)/i,/^(?:insteadof)/i,/^(?:global)/i,/^(?:isset)/i,/^(?:empty)/i,/^(?:__halt_compiler)/i,/^(?:static)/i,/^(?:abstract)/i,/^(?:final)/i,/^(?:private)/i,/^(?:protected)/i,/^(?:public)/i,/^(?:unset)/i,/^(?:=>)/i,/^(?:list)/i,/^(?:array)/i,/^(?:callable)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:===)/i,/^(?:!==)/i,/^(?:==)/i,/^(?:!=|<>)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:\+=)/i,/^(?:-=)/i,/^(?:\*=)/i,/^(?:\/=)/i,/^(?:\.=)/i,/^(?:%=)/i,/^(?:<<=)/i,/^(?:>>=)/i,/^(?:&=)/i,/^(?:\|=)/i,/^(?:\^=)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:OR)/i,/^(?:AND)/i,/^(?:XOR)/i,/^(?:<<)/i,/^(?:>>)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:__CLASS__)/i,/^(?:__TRAIT__)/i,/^(?:__FUNCTION__)/i,/^(?:__METHOD__)/i,/^(?:__LINE__)/i,/^(?:__FILE__)/i,/^(?:__DIR__)/i,/^(?:__NAMESPACE__)/i,/^(?:\$\{)/i,/^(?:\$([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)->[a-zA-Z_\x7f-\xff])/i,/^(?:\$([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)\[)/i,/^(?:\$([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*))/i,/^(?:b?['])/i,/^(?:b?["])/i,/^(?:b?<<<([ \t]*)(([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)|([']([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)['])|(["]([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)["]))((\r\n|\n|\r)))/i,/^(?:[`])/i,/^(?:([^]))/i,/^(?:\{\$)/i,/^(?:["])/i,/^(?:[`])/i,/^(?:([^]))/i,/^(?:([^]))/i,/^(?:([^]))/i,/^(?:([^]))/i,/^(?:([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)[[}])/i,/^(?:([^]))/i,/^(?:[0]|([1-9][0-9]*))/i,/^(?:([0-9]+)|(0x[0-9a-fA-F]+)|(0b[01]+))/i,/^(?:\])/i,/^(?:([;:,.\[\]()|^&+-\/*=%!~$<>?@])|[{}"`])/i,/^(?:[ \n\r\t\\'#])/i,/^(?:([a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*))/i,/^(?:(([0-9]*\.[0-9]+)|([0-9]+\.[0-9]*))|(((([0-9]+)|(([0-9]*\.[0-9]+)|([0-9]+\.[0-9]*)))[eE][+-]?([0-9]+))))/i,/^(?:(0b[01]+))/i,/^(?:(0x[0-9a-fA-F]+))/i,/^(?:([0-9]+))/i,/^(?:#|\/\/)/i,/^(?:\/\*\*([ \n\r\t]+)|\/\*)/i,/^(?:([;:,.\[\]()|^&+-\/*=%!~$<>?@]))/i,/^(?:([^]))/i,/^(?:.)/i],
conditions: {"ST_LOOKING_FOR_VARNAME":{"rules":[140,141],"inclusive":false},"ST_NOWDOC":{"rules":[139],"inclusive":false},"ST_END_HEREDOC":{"rules":[132],"inclusive":false},"ST_HEREDOC":{"rules":[124,125,126,127,133,138],"inclusive":false},"ST_BACKQUOTE":{"rules":[124,125,126,127,133,135,137],"inclusive":false},"ST_DOUBLE_QUOTES":{"rules":[124,125,126,127,133,134,136],"inclusive":false},"ST_LOOKING_FOR_PROPERTY":{"rules":[50,51,52],"inclusive":false},"ST_VAR_OFFSET":{"rules":[127,142,143,144,145,146,147,155],"inclusive":false},"ST_IN_SCRIPTING":{"rules":[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,127,128,129,130,131,147,148,149,150,151,152,153,154,155],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,156],"inclusive":true}}
});
return lexer;
})();

module.exports = lexer;