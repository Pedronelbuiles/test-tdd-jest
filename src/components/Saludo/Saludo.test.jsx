import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Saludo from '.'

test("Testeo del componente Saludo (render)", async () => {
    render(<Saludo usuario="Pedro" mensaje="Sos el mejor! nunca lo dudes! <3"></Saludo>)
}) 

test("Testeo del componente Saludo renderiza el usuario", async () => {
    render(<Saludo usuario="Pedro" mensaje="Sos el mejor! nunca lo dudes! <3"></Saludo>)

    const usuario = await screen.findByRole('heading')

    screen.debug()

    expect(usuario).toHaveTextContent("Pedro")
}) 

test("Testeo del componente Saludo con botón", async () => {
    render(<Saludo usuario="Pedro" mensaje="Sos el mejor! nunca lo dudes! <3"></Saludo>)

    const button = await screen.findByRole('button')

    screen.debug()

    expect(button).toHaveTextContent("Mostrar saludo")
}) 

test("Testeo del componente Saludo con click en el botón", async () => {
    render(<Saludo usuario="Pedro" mensaje="Sos el mejor! nunca lo dudes! <3"></Saludo>)

    fireEvent.click(screen.getByRole('button'))

    screen.debug()

    const button = await screen.findByText(/<3/)

    expect(button).toHaveTextContent("Sos el mejor! nunca lo dudes! <3")
})

test("Testeo del componente Saludo con click en el botón", async () => {
    render(<Saludo usuario="Pedro" mensaje="Sos el mejor! nunca lo dudes! <3"></Saludo>)

    fireEvent.click(screen.getByRole('button'))

    screen.debug()

    const button = await screen.findByText(/<3/)

    fireEvent.click(screen.getByRole('button'))
    
    const buttonSinMensaje = await screen.findByText(/sin mensaje/)

    expect(buttonSinMensaje).toHaveTextContent("sin mensaje")
})