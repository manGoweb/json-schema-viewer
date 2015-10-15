var Component = require('./component')
var $ = jQuery
var tabEl = '<b> </b>'

/**
 * SchemaViewer component class
 *
 */
class SchemaViewer extends Component {

	get listeners() {
		return {
			'change': 'handleChange',
			'input': 'handleChange',
			'click': 'handleChange'
		}
	}

	handleChange(e, self) {
		var input

		try {
			input = JSON.parse(self.child(self.data.source).val())
		} catch(e) {
			return alert('Error parsing JSON')
		}

		var output = self.convert(input, 0)

		self.child(self.data.target)[0].innerHTML = output

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

		str += '<i>' + type + '</i>'

		if(input.properties) {
			var lvl = level + 1


			for (var property in input.properties){
				str += '\n' + tabEl + tab + '<strong>' + property + '</strong>: '
				str += this.convert(input.properties[property], lvl)
			}

		}

		if(input.items) {
			var lvl = level + 1

			str += ' [' + '\n'
			str += tabEl + tab + this.convert(input.items, lvl)
			str += '\n' + tab + ']'
		}

		return str

	}

}

module.exports = SchemaViewer
