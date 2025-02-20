export interface CustomButton {
    buttonMessage: string,
    onClick: () => void
}

export function CustomButton ({buttonMessage, onClick}: CustomButton){

    return (
        <button onClick={onClick}>{buttonMessage}</button>
    )

}