public class Main {

    public static double calculateTotalMealPrice(double listedMealPrice, double tipRate, double taxRate) {
        double tip = tipRate * listedMealPrice;
        double tax = taxRate * listedMealPrice;

        return listedMealPrice + tip + tax;
    }

    public static void main(String[] args) {
        double cost1 = calculateTotalMealPrice(18, 0.2, 0.1);
        double cost2 = calculateTotalMealPrice(25, 0.1, 0.1);
        double cost3 = calculateTotalMealPrice(8, 0.15, 0.1);
        double cost4 = calculateTotalMealPrice(16, 0.2, 0.1);
        double totalCost = cost1 + cost2 + cost3 + cost4;

        double individualMedianPrice = totalCost / 4;

        System.out.println("Total bill is " + totalCost + "$");
        System.out.println("Individual Median Price is " + individualMedianPrice + "$");
    }

}
