var Component = require('./component')
var $ = jQuery
var tabEl = '<b> </b>'
var pointer = require('json-pointer')

/**
 * SchemaViewer component class
 *
 */
class SchemaViewer extends Component {

	constructor(element, data) {
		super(element, data)

		this.input = this.child(data.source)
		this.target = this.child(data.target)
	}

	get listeners() {
		var obj = {}
		// obj['input ' + this.data.source] = 'handleChange'
		obj['change ' + this.data.source] = 'handleChange'
		obj['blur ' + this.data.source] = 'handleChange'
		return obj
	}

	handleChange(e, self) {
		var input

		try {
			input = JSON.parse(self.input.val())
		} catch(e) {
			self.target[0].innerHTML = 'Error parsing JSON'
			return
		}

		console.log(input)

		self.original = input

		var output = self.convert(input, 0)

		self.target[0].innerHTML = output

	}

	convert(input, level) {
		var str = ''
		var tab = ''
		var type = input.type || ''

		for (var i = 0; i < level; i++) {
			tab += tabEl
		}

		if(Array.isArray(type)){
			type = type.join('|')
		}


		if(input.title) str += '<span>' + input.title + '</span>: '
		str += '<i>' + type + '</i>'
		if(input.description) str += ' <span>(' + input.description + ')</span>'


		if(input.properties) {
			var lvl = level + 1

			for (var property in input.properties){
				str += '\n' + tabEl + tab + '<strong>' + property + '</strong>: '
				str += this.convert(input.properties[property], lvl)
			}

		}


		if(input.items) {
			var lvl = level + 1

			str += ' <span>[</span>' + '\n'
			str += tabEl + tab + this.convert(input.items, lvl)
			str += '\n' + tab + '<span>]</span>'
		}


		if(input.$ref){
			var obj = pointer.get(this.original, input.$ref.replace(/^#/, ''))
			str += this.convert(obj, level)
		}


		if(input.anyOf) {
			var lvl = level + 1
			str += '<span>&lt;</span>\n'
			input.anyOf.forEach((option, i, arr) => {
				str += tabEl + tab + this.convert(option, lvl)
				if(i < arr.length - 1) str += '\n' + tabEl + tab + '<span>/</span> \n'
			})
			str += '\n' + tab + '<span>&gt;</span>'
		}

		return str

	}

}

module.exports = SchemaViewer
