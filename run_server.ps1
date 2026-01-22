$port = 8080
$root = Get-Location
$listener = New-Object Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Server started at http://localhost:$port/"
Write-Host "Press Ctrl+C to stop"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ($localPath -eq "") { $localPath = "index.html" }
        $path = Join-Path $root $localPath
        
        if (Test-Path $path -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($path)
            $response.ContentLength64 = $content.Length
            
            # Set content type
            if ($path.EndsWith(".html")) { $response.ContentType = "text/html" }
            elseif ($path.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            elseif ($path.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($path.EndsWith(".png")) { $response.ContentType = "image/png" }
            elseif ($path.EndsWith(".jpg")) { $response.ContentType = "image/jpeg" }
            
            $response.OutputStream.Write($content, 0, $content.Length)
            $response.StatusCode = 200
            $response.Close()
            Write-Host "Served: $($localPath)" -ForegroundColor Green
        } else {
            $response.StatusCode = 404
            $response.Close()
            Write-Host "Not Found: $($localPath)" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "Error: $_" -ForegroundColor Red
    }
}
