export const UserCompany = ({company}) => {
    const {name, catchPhrase, bs} = company;

    return (
        <div><b>Company</b>
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    )
}