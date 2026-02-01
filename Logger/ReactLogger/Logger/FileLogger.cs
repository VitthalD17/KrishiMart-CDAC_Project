namespace MVCDemo.Logger
{
    public class FileLogger
    {
        private static FileLogger _fileLogger = new FileLogger();
        private FileLogger() { }

        public static FileLogger CurrentLogger
        {
            get { return _fileLogger; }
        }
        public void Log(string message)
        {
            try
            {
                string folder = @"E:\IACSD\AdvJava\KrishiMart\Logger";
                if (!Directory.Exists(folder))
                    Directory.CreateDirectory(folder);

                string path = Path.Combine(folder, "Log.txt");

                using (StreamWriter writer = new StreamWriter(path, true)) 
                {
                    writer.WriteLine($"Logged at {DateTime.Now} - {message}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Logging failed: " + ex.Message);
            }
        }




    }
}
