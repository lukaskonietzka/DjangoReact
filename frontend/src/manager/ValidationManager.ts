
export class ValidationManager {
    valide(toBeChecked: string): boolean {
        if (toBeChecked === null || toBeChecked === undefined) {
            this.notify(' null or undefined')
            return false
        }
        if (toBeChecked === '') {
            return false
        }
        return true
    }

    private notify(message: string): void {
        console.log('Format not valide!!' + message)
    }
}