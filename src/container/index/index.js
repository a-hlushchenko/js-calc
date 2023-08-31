class Calc {
  static #NAME = 'calc'
  static #value = ''
  static #displayValue = ''
  static #isDot = false
  static #isResult = true
  static #isOp = false

  static add = (newValue) => {
    if (this.#isResult) {
      this.#value = ''
    }

    if (isNaN(this.#value[this.#value.length - 2])) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        !this.#isDot
      ) {
        return null
      }
    }

    this.#value = this.#value.concat(newValue)
    this.#displayValue = this.#displayValue.concat(newValue)

    if (this.#isOp) {
      this.#display()
    } else {
      this.#output()
    }

    this.#isResult = false
    this.#isOp = false
  }

  static dot = (newValue) => {
    if (
      this.#isDot ||
      isNaN(this.#value[this.#value.length - 1])
    ) {
      return null
    }

    this.#value = this.#value.concat('.')
    this.#displayValue = this.#displayValue.concat('.')
    this.#display()
    this.#isDot = true
  }

  static op = (opValue) => {
    this.result()
    if (this.#value.length === 0) {
      this.#value = '0'
    }

    if (isNaN(this.#value[this.#value.length - 1])) {
      this.#value = this.#value.slice(
        0,
        this.#value.length - 1,
      )
    }

    this.#value = this.#value.concat(opValue)
    this.#displayValue = this.#displayValue = ''
    this.#isDot = false
    this.#isResult = false
    this.#isOp = true
  }

  static reset = (newValue) => {
    this.#value = '0'
    this.#displayValue = ''
    this.#output()
    this.#value = ''
    this.#isDot = false
    this.#isResult = false
  }

  static result = (newValue) => {
    if (this.#value.length === 0) {
      return null
    }

    this.#value = String(eval(this.#value))
    this.#output()
    this.#isResult = true
  }

  static #output = () => {
    this.#save()
    window.output.innerHTML = this.#value
  }

  static #display = () => {
    this.#save()
    window.output.innerHTML = this.#displayValue
  }

  static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
  }

  static #load = () => {
    this.#value =
      window.localStorage.getItem(this.#NAME) || '0'
  }

  static init = () => {
    this.#load()
    this.#output()
  }
}

Calc.init()

window.calc = Calc
