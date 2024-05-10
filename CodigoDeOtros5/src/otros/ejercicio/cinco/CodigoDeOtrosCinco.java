import java.util.*;

public class Codigo5 {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Introduzca un número: ");
		int ni = s.nextInt();
		int c = ni;

		int afortunado = 0;
		int noAfortunado = 0;

		while (ni > 0) {
			int digito = (int) (ni % 10);
			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afortunado++;
			} else {
				noAfortunado++;
			}

			if (afortunado > noAfortunado) {
				System.out.println("El " + c + " es un número afortunado.");
			} else {
				System.out.println("El " + c + " no es un número afortunado.");
			}
			ni /= 10;

		}
		s.close();

	}
}
