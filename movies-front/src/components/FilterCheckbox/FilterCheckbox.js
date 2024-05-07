export default function FilterCheckbox({ isCheck, changeCheck }) {
    return (
        <div className="Checkbox">
            <input
                className="Checkbox__input"
                type="checkbox"
                checked={isCheck}
                onChange={changeCheck}
            />
            <label className="Checkbox__switch">
                Короткометражки
            </label>
        </div>
    )
}