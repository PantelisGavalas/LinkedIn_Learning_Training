public class Main {

    public static void calculateTotalMealPrice(double listedMealPrice, double tipRate, double taxRate) {
        double tip = tipRate * listedMealPrice;
        double tax = taxRate * listedMealPrice;
        double result = listedMealPrice + tip + tax;

        System.out.println("Your total meal price is " + result + "$");
    }

    public static void main(String[] args) {
        calculateTotalMealPrice(15, 0.2, 0.1);
        calculateTotalMealPrice(25, 0.1, 0.1);
        calculateTotalMealPrice(8, 0.15, 0.1);
    }

}
