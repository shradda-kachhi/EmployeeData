/*
 * package employeeDetails.ed.service;
 * 
 * import java.io.IOException; import java.nio.file.Files; import
 * java.nio.file.Path; import java.nio.file.Paths; import java.util.Arrays;
 * import java.util.Comparator; import java.util.List; import
 * java.util.function.Supplier; import java.util.stream.Collectors; import
 * java.util.stream.Stream;
 * 
 * public class Java8Test { public static void main(String[] args) { Java8Test
 * obj = new Java8Test(); List<?> returnList;
 * 
 * List<String> list = Arrays.asList("shradda", "wdr", "Abc", "BAc", "CAB",
 * "dwe", "zgd", "Naruto", "Hinata", "Sakura", "Sasuke"); //returnList =
 * obj.mapTest(list); // returnList.forEach(System.out::println);
 * //obj.filterTest(list); obj.fileStream(); }
 * 
 * public List<?> mapTest(List<String> list) { // map takes a funcion<I,R> as a
 * parameter, where R is returntype datatype return list.stream().map(i ->
 * i.toUpperCase()).sorted().collect(Collectors.toList());
 * 
 * }
 * 
 * public List<?> limitTest(List<String> list) { // limt the size return
 * list.stream().limit(3).collect(Collectors.toList());
 * 
 * }
 * 
 * public void filterTest(List<String> list) { String str =
 * list.stream().filter(st -> st.length() > 3).reduce("", (i, j) -> i + " " +
 * j); System.out.println(str);
 * 
 * // max takes object of comparator and returns optiona object
 * System.out.println(list.stream().max((o1, o2) ->
 * o1.compareToIgnoreCase(o2)).get());
 * 
 * // findAny returns optional System.out.println(list.stream().filter(i ->
 * i.startsWith("Saser")|| i.startsWith("shr")).findAny().orElse("no string"));
 * 
 * //AllMatch anymatch none match returns boolean
 * System.out.println(list.stream().filter(i->
 * i.startsWith("Sa")).anyMatch(i->i.charAt(2)=='k'));
 * 
 * 
 * }
 * 
 * public void fileStream() { Path path =
 * Paths.get("C:\\Users\\shraddak\\Documents\\test.txt"); try(Stream<String>
 * stream=Files.lines(path)) { //stream.forEach(System.out::println);
 * stream.filter(i->
 * i.contains("sd")).collect(Collectors.toList()).forEach(System.out::println);
 * } catch (IOException e) { // TODO Auto-generated catch block
 * e.printStackTrace(); } } }
 */