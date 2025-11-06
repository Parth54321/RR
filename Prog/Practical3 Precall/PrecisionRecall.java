import java.util.*;

public class PrecisionRecall {
    public static void main(String[] args) {
        // Sample input
        Set<String> answerSet = new HashSet<>(Arrays.asList("doc1", "doc2", "doc4"));
        Set<String> relevantSet = new HashSet<>(Arrays.asList("doc2", "doc3", "doc4"));

        // Compute intersection
        Set<String> intersection = new HashSet<>(answerSet);
        intersection.retainAll(relevantSet);

        // Precision
        double precision = (double) intersection.size() / answerSet.size();

        // Recall
        double recall = (double) intersection.size() / relevantSet.size();

        System.out.println("Answer set A: " + answerSet);
        System.out.println("Relevant set R1: " + relevantSet);
        System.out.println("Retrieved relevant documents (A ∩ R1): " + intersection);
        System.out.printf("Precision: %.2f\n", precision);
        System.out.printf("Recall: %.2f\n", recall);
    }
}
