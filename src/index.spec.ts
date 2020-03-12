import greeter from './index'

describe('The greeter', () => {
  it('should greet the world', () => {
    expect(greeter()).toMatch('Hello World!')
  })

  it('should greet a stranger', () => {
    const greetee = 'stranger'
    expect(greeter(greetee)).toMatch(`Hello ${greetee}!`)
  })
})
