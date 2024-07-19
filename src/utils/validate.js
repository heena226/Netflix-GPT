export const validateData = (name, email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);

    console.log(name, email, password);
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not correct";
    if(!isNameValid) return "Name is not valid";

    return null;
}