import {useInput} from "./hooks/useInput";

export default function AddColorForm({onNewColor}) {

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = event => {
        event.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }
    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="Color title ..." required />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    )
}