
import java.util.ArrayList;
import java.util.Scanner;

public class Mine {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


Scanner sc = new Scanner(System.in);
System.out.println("Enter a number");
int n = sc.nextInt();
boolean isprime = false;

for(int i=2;i<=n/2;i++){

   if(n%i == 0){
isprime = true;
   }


}
if(isprime){
	System.out.println("Not a prime ");
}else{
	System.out.println("Is a prime");

}



	}

}