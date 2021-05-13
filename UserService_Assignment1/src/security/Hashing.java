package security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

	public class Hashing {

		// We need a bytesToHex method first. So, from -
			// http://stackoverflow.com/a/9855338/2970947
		  protected static final char[] hexArray = "0123456789ABCDEF"
			    .toCharArray();

			public static String bytesToHex(byte[] bytes) {
			  char[] hexChars = new char[bytes.length * 2];
			  int v;
			  for (int j = 0; j < bytes.length; j++) {
			    v = bytes[j] & 0xFF;
			    hexChars[j * 2] = hexArray[v >>> 4];
			    hexChars[j * 2 + 1] = hexArray[v & 0x0F];
			  }
			  return new String(hexChars);
			}

			// Change this to something else.
			
			private static String salt = "$K@y2*T4men&t0A";

			// A password hashing method.
			public String hashPassword(String in) {
			  try {
			    MessageDigest md = MessageDigest
			        .getInstance("SHA-256");
			    md.update(salt.getBytes());        // <-- Prepend SALT.
			    md.update(in.getBytes());
			    // md.update(SALT.getBytes());     // <-- Or, append SALT.

			    byte[] out = md.digest();
			    return bytesToHex(out);            // <-- Return the Hex Hash.
			  } catch (NoSuchAlgorithmException e) {
			    e.printStackTrace();
			  }
			  return "";
			}

}
