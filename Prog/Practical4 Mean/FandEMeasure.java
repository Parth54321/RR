import java.util.*;

public class FandEMeasure {
    public static void main(String[] args) {
        // Sample input
        Set<String> answerSet = new HashSet<>(Arrays.asList("doc1", "doc2", "doc4", "doc5"));
        Set<String> relevantSet = new HashSet<>(Arrays.asList("doc2", "doc3", "doc4"));

        // Intersection = retrieved relevant documents
        Set<String> intersection = new HashSet<>(answerSet);
        intersection.retainAll(relevantSet);

        // Precision
        double precision = (double) intersection.size() / answerSet.size();

        // Recall
        double recall = (double) intersection.size() / relevantSet.size();

        // F-Measure (Harmonic mean)
        double fMeasure = (precision + recall == 0) ? 0 : (2 * precision * recall) / (precision + recall);

        // E-Measure
        double eMeasure = 1 - fMeasure;

        // Print results
        System.out.println("Answer set A: " + answerSet);
        System.out.println("Relevant set R1: " + relevantSet);
        System.out.println("Retrieved relevant documents (A ∩ R1): " + intersection);
        System.out.printf("Precision: %.2f\n", precision);
        System.out.printf("Recall: %.2f\n", recall);
        System.out.printf("F-Measure (Harmonic Mean): %.2f\n", fMeasure);
        System.out.printf("E-Measure: %.2f\n", eMeasure);
    }
}
